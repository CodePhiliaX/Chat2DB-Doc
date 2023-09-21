---
title: 'SQL Syntax Conversion'
sidebar_position: 11
description: Chat2DB is a database client tool that integrates AI capabilities and supports the management of multiple databases, including MySQL and Oracle.
---

## Feature 4: SQL Conversion

Different databases may have slight variations in SQL syntax. With Chat2DB, we can use it to help us convert the syntax of SQL queries. For example, let's convert the following MySQL pagination syntax into Oracle syntax:

```sql
## ---BEGIN---
## SELECT s.name, SUM(sc.score) AS total_score
FROM student s
INNER JOIN student_course sc ON s.id = sc.student_id
GROUP BY s.id
ORDER BY total_score DESC
LIMIT 10;
## ---SQL Conversion:---
SQL Conversion:

SELECT s.name, SUM(sc.score) AS total_score
FROM student s
INNER JOIN student_course sc ON s.id = sc.student_id
GROUP BY s.id, s.name
ORDER BY total_score DESC
FETCH FIRST 10 ROWS ONLY;
## --- END ---
```