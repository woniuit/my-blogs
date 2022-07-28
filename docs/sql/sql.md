# sql

## 常见的数据库

通常将数据划分成两类：关系型数据库和非关系型数据库。

关系型数据库：MySQL、Oracle、DB2、SQL Server、Postgre SQL等

- 关系型数据库通常我们会创建很多个二维数据表
- 数据表之间相互关联起来，形成一对一、一对多、多对对等关系；
- 之后可以利用SQL语句在多张表中查询我们所需的数据
- 支持事务，对数据的访问更加的安全

非关系型数据库：MongoDB、Redis、Memcached、HBse等；

- 非关系型数据库的英文其实是Not only SQL，也简称为NoSQL；
- 相当而已非关系型数据库比较简单一些，存储数据也会更加自由（甚至我们可以直接将一个复杂的json对象直接塞入到数据库中）；
- NoSQL是基于Key-Value的对应关系，并且查询的过程中不需要经过SQL解析，所以性能更高；
- NoSQL通常不支持事物，需要在自己的程序中来保证一些原子性的操作

如何在开发中选择他们呢？具体的选择会根据不同的项目进行综合的分析，

- 目前在公司进行后端开发（Node、Java、Go等），还是以关系型数据库为主
- 比较常用的用到非关系型数据库的，在爬取大量的数据进行存储时，会比较常见；

## Gut工具

Navicat

## 数据库的操作

### 查看当前数据库

```sql
#查看所有的数据库
SHOW DATABASES

# 使用某一个数据
USE coderhub(数据库名称);

# 查看当前正在使用的数据库
SELECT DATABASE()
```

### 创建新的数据库

```sql
# 创建数据库语句
CREATE DATABASE IF NOT EXISTS bilibili;
```

### 删除数据库

```sql
# 删除数据库
DROP DATABASE IF EXIT bilibili;
```

### 修改数据库

```sql
# 修改数据库的字符集和排序规则
ALTER DATABASE bilibili CHARACTER SET = utf8 COLLATE = utf8_unicode_ci;
```

## 数据库表的操作

### 查看数据表

```sql
# 查看所有的数据表
SHOW TABLES;
# 查看某一个表结构
DESC user
```

### 创建数据表

```sql
CREATE TABLE IF NOT EXISTS `users`(
name VARCHAR(20),
age INT,
height DOUBLE
);

```

