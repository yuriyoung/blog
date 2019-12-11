(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{188:function(s,t,n){"use strict";n.r(t);var a=n(2),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"一般实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一般实现"}},[s._v("#")]),s._v(" 一般实现")]),s._v(" "),n("p",[s._v("通常拖动的实现方法如下，会导致在某些系统上窗口“抖动”：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("    ApplicationWindow "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" mainWindow\n    visible"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    width"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("640")]),s._v("\n    height"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("480")]),s._v("\n    title"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("qsTr")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Window"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    flags"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Qt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("FramelessWindowHint\n    header"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ToolBar "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        MouseArea"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            anchors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fill"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" parent\n            property variant pressedPos"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0,0"')]),s._v("\n\n            onPressed"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                pressedPos  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Qt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("point")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mouse"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" mouse"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n            onPositionChanged"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" delta "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Qt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("point")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mouse"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" pressedPos"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" mouse"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("y "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" pressedPos"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                    mainWindow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" delta"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                    mainWindow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("y "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" delta"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("h2",{attrs:{id:"解决方法1："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解决方法1："}},[s._v("#")]),s._v(" 解决方法1：")]),s._v(" "),n("p",[s._v("使用c++实现一个鼠标位置的帮助类，并将其对象暴露给QML上下文属性，来解决这个问题。这个方法在原先“抖动”的系统上，使得复杂的QML UI也能表现良好：")]),s._v(" "),n("ol",[n("li",[s._v("一个c++帮助类的实现：")])]),s._v(" "),n("div",{staticClass:"language-cpp line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CursorPosProvider")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" QObject\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    Q_OBJECT\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("explicit")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("CursorPosProvider")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("QObject "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("parent "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("nullptr")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("QObject")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("parent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("virtual")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("CursorPosProvider")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    Q_INVOKABLE QPointF "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cursorPos")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" QCursor"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("pos")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[s._v("非常简单的一个类，只从c++端提供一个鼠标位置。这有些奇怪，在QML中使用相同的操作时，在一些系统上会遇到“抖动”问题。")]),s._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[s._v("将这个类注册为context属性暴露给QML：")])]),s._v(" "),n("div",{staticClass:"language-cpp line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token macro property"}},[s._v("#"),n("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"CursorPosProvider.h"')])]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" argc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("argv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    QGuiApplication "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("app")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("argc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" argv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    CursorPosProvider mousePosProvider"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n    QQmlApplicationEngine engine"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    engine"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rootContext")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("->")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("setContextProperty")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mousePosition"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("mousePosProvider"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    engine"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("load")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("QUrl")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("QStringLiteral")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"qrc:/main.qml"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("exec")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("ol",{attrs:{start:"3"}},[n("li",[s._v("给无边框窗口实现一个Qt Quick标题栏组件"),n("code",[s._v("TitleBar.qml")]),s._v("：")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("Rectangle "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" control\n    width"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" parent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("width\n    color"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"#2196F3"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 随便给的一个颜色")]),s._v("\n\n    property QtObject container\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// TODO: 一些扩展属性或信号")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n\n    MouseArea "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" titleBarMouseRegion\n        property "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" pressedPos\n        anchors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fill"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" parent\n        onPressed"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            pressedPos "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" mouse"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" mouse"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("y "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        onPositionChanged"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            container"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" mousePosition"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cursorPos")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" pressedPos"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("x\n            container"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("y "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" mousePosition"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cursorPos")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("y "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" pressedPos"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("y\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("p",[s._v("4.现在可以在Window组件下使用这个TitleBar组件了：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("Window "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" root\n    visible"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    flags"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Qt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("FramelessWindowHint\n\n    TitleBar "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        height"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("\n        container"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" root\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    Text "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("qsTr")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello World"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        anchors"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("centerIn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" parent\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("补充：当使用无边框窗口拖动时，UI中的动画会停止刷新（在Mac OS，其他系统未测试），直到拖动被释放，此时拖动过程中的动画侦被跳过了。而拖动原生窗口的标题栏不会导致这种问题。所以，有必要提出"),n("code",[s._v("解决方法2")]),s._v("。")]),s._v(" "),n("h2",{attrs:{id:"解决方法2："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解决方法2："}},[s._v("#")]),s._v(" 解决方法2：")]),s._v(" "),n("p",[s._v("使用系统API（待续...）")])])}),[],!1,null,null,null);t.default=e.exports}}]);