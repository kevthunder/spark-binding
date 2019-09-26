# Spark-Binding

Utility classes to bind classes together

## Installation

Install package with NPM :
```sh
npm install spark-binding
```

You can install it directly from github:
```sh
npm install kevthunder/spark-binding
```

## Content

### Binder

A generic class to create a binder. 

The function `doBind` and `doUnbind` need to be implemented to make it a fully functional binder

### EventBind

A class that remember to wich class and event a callback need to be added as a listener. 

Use `bind` and `unbind` to easily add and remove the listener

### Reference

An helper that make is easier to compare similar class. 

Use the `equals` function to find if the data of two References are equivalent. If sub objects also implement `equals`, it will be used

The static function `makeReferred` make is easy to add a reference to an object, by adding a `equals` function