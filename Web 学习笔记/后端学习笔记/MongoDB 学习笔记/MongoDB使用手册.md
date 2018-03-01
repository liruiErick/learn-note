### 查询库、查询表

查询所有的数据库

```shell
$ show dbs
```

查询当前数据库下的所有数据表

```shell
$ show collections
or
$ show tables
```



### 建库和删库

建立一个名为mydb的数据库，当这个库存在时则是切换到这个数据库中去

```shell
$ use mydb
```

这两句是删除这个数据库

```shell
$ use mydb

$ db.dropDatabase()
--- or ---
$ db.runCommand({"dropDatabase": 1})
```



### 建表和删表

表操作都是要先到一个数据库中去，通过use方法

创建了名为mytable的表，并新增了一条{"name":"lecaf"}的数据

```shell
$ db.myconllect.save({"name":"lecaf"})
```

在mytable表中插入一条新数据，如果没有mytable这个表，mongodb会自动创建

 ```shell
$ db.myconllect.insert({"name":"ghost", "age":10})
 ```

`save()` 和 `insert()` 也存在着些许区别：若新增的数据主键已经存在，`insert()`会不做操作并提示错误，而 `save()` 则更改原来的内容为新内容。

 存在数据：`{ _id : 1, "name" : " n1"}`，`_id` 是主键
 `insert({ _id : 1, "name" : "n2" })`   会提示错误
 `save({ _id : 1, "name" : "n2" })`   会把 `n1` 改为`n2` ，有update的作用。

删除mytable这个数据表

```shell
$ db.myconllect.drop()
or
$ db.runCommand({"drop","myconllect"})
```



### 数据的增删改查

#### 新增

```shell
$ db.myconllect.insert({name:"hahaha",age:12})
```

#### 删除

此处相当于关系数据库中的 `delete mytable where name = "hf"`

```shell
$ db.myconllect.remove({name:"hf"})
```

删除mytable表下所有数据

```shell
$ db.myconllect.remove() 
```

#### 修改

此处的操作相当于关系数据库中的 `update mytable set age = 25 where name = 'hf'`

```shell
$ db.myconllect.update({name:"hf"},{age:10})
```

修改name="hf"的数据为age=10，第一个参数是查找条件，第二个参数是修改内容，除了主键，其他内容会被第二个参数的内容替换，主键不能修改

#### 查找

查找mytable表中所有数据

```shell
$ db.myconllect.find()
```

查找mytable表中的第一条数据

```shell
$ db.myconllect.findOne()
```



### 高级应用

#### 条件查找

查找key=value的数据

```shell
$ db.mytable.find({ "key" : value })
```

key > value

```shell
$ db.mytable.find({ "key" : { $gt: value } })
```

key < value

```shell
$ db.mytable.find({ "key" : { $lt: value } })
```

key >= value

```shell
$ db.mytable.find({ "key" : { $gte: value } })
```

key <= value

```shell
$ db.mytable.find({ "key" : { $lte: value } })
```

value1 < key < value2

```shell
$ db.mytable.find({ "key" : { $gt: value1 , $lt: value2 } })
```

 key != value

```shell
$ db.mytable.find({ "key" : { $ne: value } })
```

取模运算，条件相当于key % 10 == 1 即key除以10余数为1的

```shell
$ db.mytable.find({ "key" : { $mod : [ 10 , 1 ] } })
```

不属于，条件相当于key的值不属于[ 1, 2, 3 ]中任何一个

```shell
$ db.mytable.find({ "key" : { $nin: [ 1, 2, 3 ] } })
```

属于，条件相当于key等于[ 1, 2, 3 ]中任何一个

```shell
$ db.mytable.find({ "key" : { $in: [ 1, 2, 3 ] } })
```

$size 数量、尺寸，条件相当于key的值的数量是1（key必须是数组，一个值的情况不能算是数量为1的数组）

```shell
$ db.mytable.find({ "key" : { $size: 1 } })
```

$exists 字段存在，true返回存在字段key的数据，false返回不存在字度key的数据

```shell
$ db.mytable.find({ "key" : { $exists : true|false } })
```

正则，类似like；“i”忽略大小写，“m”支持多行

```shell
$ db.mytable.find({ "key": /^val.*val$/i })
```

$or或 （注意：MongoDB 1.5.3后版本可用），符合条件a=1的或者符合条件b=2的数据都会查询出来

```shell
$ db.mytable.find({ $or : [{a : 1}, {b : 2} ] })
```

符合条件key=value ，同时符合其他两个条件中任意一个的数据

```shell
$ db.mytable.find({ "key": value , $or : [{ a : 1 } , { b : 2 }] })
```

内嵌对象中的值匹配，注意："key.subkey"必须加引号

```shell
$ db.mytable.find({ "key.subkey" :value })
```

这是一个与其他查询条件组合使用的操作符，不会单独使用。上述查询条件得到的结果集加上$not之后就能获得相反的表。

```shell
$ db.mytable.find({ "key": { $not : /^val.*val$/i } })
```

#### 排序

这里的1代表升序，-1代表降序

```shell
$ db.mytable.find().sort({ "key1" : -1 ,"key2" : 1 })
```

#### 其他

控制返回结果数量，如果参数是0，则当作没有约束，`limit()` 将不起作用

```shell
$ db.mytable.find().limit(5)
```

控制返回结果跳过多少数量，如果参数是0，则当作没有约束，`skip()` 将不起作用，或者说跳过了0条

```shell
$ db.mytable.find().skip(5)
```

可用来做分页，跳过5条数据再取5条数据

```shell
$ db.mytable.find().skip(5).limit(5)
```

 `count()` 返回结果集的条数

```shell
$ db.mytable.find().count(true)
```

在加入 `skip()` 和 `limit()` 这两个操作时，要获得实际返回的结果数，需要一个参数true，否则返回的是符合查询条件的结果总数

```shell
$ db.mytable.find().skip(5).limit(5).count(true)
```

