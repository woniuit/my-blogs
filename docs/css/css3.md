# css3

## 过渡transition

**语法**

```css
transition： CSS属性，花费时间，效果曲线(默认ease)，延迟时间(默认0)
```

**demo**

```css
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <style>
            .demo1{
                width: 200px;
                height: 30px;
                background: pink;
            }
            .demo1:hover{
                background: red;
                transition: all 2s;
            }
            .demo2{
                width: 200px;
                height: 30px;
                background: green;
                margin-top: 20px;
            }
        </style>
    </head>
    <body>
        <div class="demo1">demo1</div>
        <div class="demo2">demo2</div>
    </body>
</html>

```



## 动画

**语法**

```css
animation：动画名称，一个周期花费时间，运动曲线（默认ease），动画延迟（默认0），播放次数（默认1），是否反向播放动画（默认normal），是否暂停动画（默认running）
```

**demo1**

