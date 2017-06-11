/**
 * Created by lingjianfeng on 14/12/14.
 *
 *
 */

var Lesson0304SceneLayer = cc.Layer.extend({

    sprite : null,
    ctor:function () {
        this._super();

        this.loadOutManSprite(this.runSceneTran);

        return true;
    },
    loadOutManSprite : function(callback){
        this.sprite = new cc.Sprite(res.node128_png);
        cc.log(GC);
        this.sprite.attr({
            x : GC.w - this.sprite.getContentSize().width / 2,
            y : GC.h - this.sprite.getContentSize().height / 2
        });
        this.addChild(this.sprite);


        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: callback
        }, this);
    },

    runSceneTran:function () {

        cc.log("时间");
        var scene = new cc.Scene();
        var layer = new cc.LayerColor(cc.color(128, 128, 255));
        scene.addChild(layer, 0);

//        cc.director.runScene(scene);
        cc.director.runScene(new cc.TransitionSlideInT(1.5, scene));

        // 更多效果，参考引擎下samples/js-tests/src/SceneTest/SceneTests.js
    }
});

var Lesson0304Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Lesson0304SceneLayer();
        this.addChild(layer);

    }
});

