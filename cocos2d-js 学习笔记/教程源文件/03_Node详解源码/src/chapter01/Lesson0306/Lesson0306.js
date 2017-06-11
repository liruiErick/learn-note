/**
 * Created by lingjianfeng on 14/12/14.
 *
 *
 */

var Lesson0306SceneLayer = cc.Layer.extend({

    ctor:function () {
        this._super();


        return true;
    }
});

var Lesson0306Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Lesson0306SceneLayer();
        this.addChild(layer);
    }
});

