---
title: "Natural Language to SQL"
sidebar_position: 8
description: Chat2DB is a database client tool that integrates AI capabilities and supports the management of multiple databases, including MySQL and Oracle.
---

## Feature 1: Natural Language to SQL

First, let's create the necessary tables for testing. In this example, we'll use four tables for testing, but you can create your own tables for testing purposes.

```sql
CREATE TABLE student (
  id INT PRIMARY KEY AUTO_INCREMENT COMMENT 'Student ID',
  name VARCHAR(50) NOT NULL COMMENT 'Student Name',
  gender VARCHAR(10) NOT NULL COMMENT 'Student Gender',
  birthday DATE NOT NULL COMMENT 'Student Birthday',
  address VARCHAR(100) NOT NULL COMMENT 'Student Address',
  phone VARCHAR(20) NOT NULL COMMENT 'Student Contact'
) COMMENT 'Student Information Table';

CREATE TABLE course (
  id INT PRIMARY KEY AUTO_INCREMENT COMMENT 'Course ID',
  name VARCHAR(50) NOT NULL COMMENT 'Course Name',
  teacher VARCHAR(50) NOT NULL COMMENT 'Course Teacher',
  credit INT NOT NULL COMMENT 'Course Credits'
) COMMENT 'Course Table';

CREATE TABLE student_course (
  id INT PRIMARY KEY AUTO_INCREMENT COMMENT 'Relationship ID',
  student_id INT NOT NULL COMMENT 'Student ID',
  course_id INT NOT NULL COMMENT 'Course ID',
  FOREIGN KEY (student_id) REFERENCES student(id),
  FOREIGN KEY (course_id) REFERENCES course(id)
) COMMENT 'Student Course Enrollment Table';

CREATE TABLE score (
  id INT PRIMARY KEY AUTO_INCREMENT COMMENT 'Score ID',
  student_id INT NOT NULL COMMENT 'Student ID',
  course_id INT NOT NULL COMMENT 'Course ID',
  score INT NOT NULL COMMENT 'Score',
  FOREIGN KEY (student_id) REFERENCES student(id),
  FOREIGN KEY (course_id) REFERENCES course(id)
) COMMENT 'Student Score Table';
```

Once the tables are created, you can insert some test data.

Next, we can directly use natural language input, such as "Retrieve the scores of a student named Xiao Ming," and generate SQL as follows:

```sql
## ---BEGIN---
## Retrieve the scores of a student named Xiao Ming

## ---Natural Language to SQL:---
SELECT score.score
FROM score
INNER JOIN student_course ON score.course_id = student_course.course_id
INNER JOIN student ON student_course.student_id = student.id
WHERE student.name = 'Xiao Ming'
## --- END ---
```

For example, "Retrieve the top ten students in the class ranked by total score" generates SQL like this:

```sql
## ---BEGIN---
## Retrieve the top ten students in the class ranked by total score

## ---Natural Language to SQL:---
SELECT s.name, SUM(sc.score) AS total_score
FROM student s
INNER JOIN student_course sc ON s.id = sc.student_id
GROUP BY s.id
ORDER BY total_score DESC
LIMIT 10;
## --- END ---
```

Please note that when using natural language to convert to SQL, you need to select the original tables used for generating SQL to improve the accuracy of Prompt training. This allows GPT to generate SQL based on the specific tables you've selected.

The code for calling the ChatGPT API Prompt looks like this:

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
    "### Please generate SQL based on the following table properties and SQL input%s. %s\n#\n### %s SQL tables, with their properties:\n#\n# "
    + "%s\n#\n#\n### SQL input: %s", pType.getDescription(), ext, dataSourceType,
    properties, prompt) : String.format("### Please generate SQL based on the following SQL input%s. %s\n#\n### SQL input: %s",
                                        pType.getDescription(), ext, prompt);
```
