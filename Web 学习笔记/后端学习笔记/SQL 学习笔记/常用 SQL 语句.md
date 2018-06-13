# 常用 SQL 语句

#### 模糊查询

```sql
SELECT * FROM `<表名>` WHERE `<列名>` LIKE '%<关键字>%';
```

#### 查找修改

```sql
UPDATE `<表名>` SET `<要修改的列名>`='<要修改的列值>' WHERE `<查询的列名>`='<查询的列值>';
```

#### 查找替换

```sql
UPDATE `<表名>` SET `<列名>` = replace(`<列名>`, '<需要替换的字符>', '<替换的新字符>');
```

#### 插入一条数据

```sql
INSERT INTO `<表名>` VALUES ('<值1>', '<值2>', ...);
INSERT INTO `<表名>` (`<列1>`, `<列2>`, ...) VALUES ('<值1>', '<值2>', ...);
```

#### 根据查询结果，循环插入多条数据

```sql
INSERT INTO `<插入目标表名>` (`<插入目标列1>`, `<插入目标列2>`)
SELECT <表1别名>.<表1某列名>, <表2别名>.<表2某列名> FROM `<表1>` <表1别名>, `<表2>` <表2别名>
WHERE <表1别名>.<表1某列名> = <表2别名>.<表2某列名> AND <表1别名>.<表1某列名> = '<某值>';
```

例如

```sql
INSERT INTO `wp_term_relationships` (`object_id`, `term_taxonomy_id`)
SELECT a.ID, b.term_id FROM `wp_posts` a, `wp_terms` b
WHERE a.post_type = b.slug AND (a.post_type = 'bag'  OR a.post_type = 'clock');
```

