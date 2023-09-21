---
title: '自然语言生成SQL'
sidebar_position: 8
description: Chat2DB一个集成了AI能力的、支持Mysql、Oracle等多种数据库管理的数据库客户端工具
---

## 功能一：自然语言生成SQL
首先建好测试需要用的表，这里用到了4张表做测试。大家也可以建自己的表做测试。
```sql
CREATE TABLE student (
  id INT PRIMARY KEY AUTO_INCREMENT COMMENT '学生ID',
  name VARCHAR(50) NOT NULL COMMENT '学生姓名',
  gender VARCHAR(10) NOT NULL COMMENT '学生性别',
  birthday DATE NOT NULL COMMENT '学生生日',
  address VARCHAR(100) NOT NULL COMMENT '学生住址',
  phone VARCHAR(20) NOT NULL COMMENT '学生联系方式'
) COMMENT '学生信息表';
科目表：

CREATE TABLE course (
  id INT PRIMARY KEY AUTO_INCREMENT COMMENT '科目ID',
  name VARCHAR(50) NOT NULL COMMENT '科目名称',
  teacher VARCHAR(50) NOT NULL COMMENT '授课教师',
  credit INT NOT NULL COMMENT '科目学分'
) COMMENT '科目表';
学生选修科目表：

CREATE TABLE student_course (
  id INT PRIMARY KEY AUTO_INCREMENT COMMENT '关系ID',
  student_id INT NOT NULL COMMENT '学生ID',
  course_id INT NOT NULL COMMENT '科目ID',
  FOREIGN KEY (student_id) REFERENCES student(id),
  FOREIGN KEY (course_id) REFERENCES course(id)
) COMMENT '学生选修科目表';
学生成绩表：

CREATE TABLE score (
  id INT PRIMARY KEY AUTO_INCREMENT COMMENT '成绩ID',
  student_id INT NOT NULL COMMENT '学生ID',
  course_id INT NOT NULL COMMENT '科目ID',
  score INT NOT NULL COMMENT '成绩',
  FOREIGN KEY (student_id) REFERENCES student(id),
  FOREIGN KEY (course_id) REFERENCES course(id)
) COMMENT '学生成绩表';
```
表建好后，可以插入一些测试数据。
接下来我们可以直接用自然语言输入比如：“查询小明的各科目成绩” 生成结果如下：
```sql
## ---BEGIN---
## 查询学生小明的各科目成绩

## ---自然语言转换:---
SELECT score.score 
FROM score 
INNER JOIN student_course ON score.course_id = student_course.course_id 
INNER JOIN student ON student_course.student_id = student.id 
WHERE student.name = '小明'
## --- END ---
```
再比如："查询总成绩排名班级前十的同学" 生成结果如下：
```sql
## ---BEGIN---
## 查询总成绩排名班级前十的同学

## ---自然语言转换:---
SELECT s.name, SUM(sc.score) AS total_score
FROM student s
INNER JOIN student_course sc ON s.id = sc.student_id
GROUP BY s.id
ORDER BY total_score DESC
LIMIT 10;
## --- END ---
```

需要注意的是选择自然语言转SQL，需要选择一下用于生成的SQL的原始表，目的提升Prompt训练的精度，让GPT根据你选择的特定表生成SQL。

调用ChatGPT API Prompt代码如下：

```java
Map<String, List<TableColumn>> tableColumns = buildTableColumn(queryParam, queryRequest.getTableNames());
List<String> tableSchemas = tableColumns.entrySet().stream().map(
    entry -> String.format("%s(%s)", entry.getKey(),
                           entry.getValue().stream().map(TableColumn::getName).collect(
                               Collectors.joining(", ")))).collect(Collectors.toList());
String properties = String.join("\n#", tableSchemas);
String prompt = queryRequest.getMessage();
String promptType = StringUtils.isBlank(queryRequest.getPromptType()) ? PromptType.NL_2_SQL.getCode()
: queryRequest.getPromptType();
PromptType pType = EasyEnumUtils.getEnum(PromptType.class, promptType);
String ext = StringUtils.isNotBlank(queryRequest.getExt()) ? queryRequest.getExt() : "";
String schemaProperty = CollectionUtils.isNotEmpty(tableSchemas) ? String.format(
    "### 请根据以下table properties和SQL input%s. %s\n#\n### %s SQL tables, with their properties:\n#\n# "
    + "%s\n#\n#\n### SQL input: %s", pType.getDescription(), ext, dataSourceType,
    properties, prompt) : String.format("### 请根据以下SQL input%s. %s\n#\n### SQL input: %s",
                                        pType.getDescription(), ext, prompt);
```