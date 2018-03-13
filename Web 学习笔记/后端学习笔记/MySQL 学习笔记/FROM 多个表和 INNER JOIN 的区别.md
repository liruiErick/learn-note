## FROM 多个表和 INNER JOIN 的区别

他们是等价的!

也就是说

```sql
SELECT *
FROM  table1_name t1
INNER JOIN table2_name t2
    ON t1.uid = t2.uid
```

等价于:

```sql
SELECT *
FROM  table1_name, table2_name
WHERE t1.uid = t2.uid
```