---
title: 'SQL语法转换'
sidebar_position: 11
description: Chat2DB一个集成了AI能力的、支持Mysql、Oracle等多种数据库管理的数据库客户端工具
---

## 功能四：SQL转换
不同数据库SQL预发间有略微的差异，我们也可以通过Chat2DB让他帮我们去转换这个SQL的语法。
比如将如下的分页从Mysql语法转换成Oracle的语法。

```sql
## ---BEGIN---
## SELECT s.name, SUM(sc.score) AS total_score
FROM student s
INNER JOIN student_course sc ON s.id = sc.student_id
GROUP BY s.id
ORDER BY total_score DESC
LIMIT 10;
## ---SQL转换:---
SQL转换:

SELECT s.name, SUM(sc.score) AS total_score
FROM student s
INNER JOIN student_course sc ON s.id = sc.student_id
GROUP BY s.id, s.name
ORDER BY total_score DESC
FETCH FIRST 10 ROWS ONLY;
## --- END ---
```