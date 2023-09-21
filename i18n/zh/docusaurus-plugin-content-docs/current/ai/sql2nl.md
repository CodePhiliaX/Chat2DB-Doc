---
title: 'SQL翻译为自然语言'
sidebar_position: 9
description: Chat2DB一个集成了AI能力的、支持Mysql、Oracle等多种数据库管理的数据库客户端工具
---

## 功能二：SQL翻译为自然语言
有的时候我们会遇到非常复杂的SQL，有的甚至成百上千行的SQL，要读懂这段SQL可能需要几个小时甚至几天时间。我们通过Chat2DB也可以快速的了解这段SQL的含义：

```sql
## ---BEGIN---
## SELECT score.score 
FROM score 
INNER JOIN student_course ON score.course_id = student_course.course_id 
INNER JOIN student ON student_course.student_id = student.id 
WHERE student.name = '小明'
## ---解释SQL:---
这个SQL查询语句的作用是从“score”表中选择“score”列，同时使用“INNER JOIN”将“score”表与“student_course”表和“student”表连接起来。连接的条件是“score”表中的“course_id”列等于“student_course”表中的“course_id”列，“student_course”表中的“student_id”列等于“student”表中的“id”列。最后，使用“WHERE”子句筛选出“student”表中“name”列为“小明”的记录。这个查询语句的目的是找到学生“小明”在所有课程中的成绩。
## --- END ---
```