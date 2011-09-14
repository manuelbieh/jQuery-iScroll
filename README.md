# jQuery iScroll

Create iScroll Objects in jQuery style. 

Instead of: 

`new iScroll('myId');`

you can use:

`$('#myId').iScroll();`

Plus: a scrollwrapper is created automatically when specifying width or height as option.

After creating a new scroll object you can access iScroll methods via `$('#myId').iScroll().refresh();` for example.