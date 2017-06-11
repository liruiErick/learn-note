package 
{
    import Box2D.Collision.b2AABB;
    import Box2D.Collision.b2WorldManifold;
    import Box2D.Collision.Shapes.b2CircleShape;
    import Box2D.Collision.Shapes.b2PolygonShape;
    import Box2D.Collision.Shapes.b2Shape;
    import Box2D.Common.Math.b2Vec2;
    import Box2D.Dynamics.b2Body;
    import Box2D.Dynamics.b2BodyDef;
    import Box2D.Dynamics.b2DebugDraw;
    import Box2D.Dynamics.b2Fixture;
    import Box2D.Dynamics.b2FixtureDef;
    import Box2D.Dynamics.b2World;
    import Box2D.Dynamics.Controllers.b2GravityController;
    import Box2D.Dynamics.Joints.b2JointDef;
    import Box2D.Dynamics.Joints.b2MouseJoint;
    import Box2D.Dynamics.Joints.b2MouseJointDef;
    import flash.display.Sprite;
    import flash.events.Event;
    import flash.events.MouseEvent;
    import flash.utils.Timer;
	
    [SWF (width="600",height="480",frameRate="30")]
    public class Main extends Sprite 
    {
        private const PIXEL_TO_METER:int = 30;
        private var world:b2World;
        private var mouseXphy:Number;
        private var mouseYphy:Number;
        //private var console:Console;
        private var beMouseDown:Boolean;
        private var mouseJoint:b2MouseJoint;
		
        public function Main():void 
        {
            createWorld();
            createWall();
            createBall();
            createDebugDraw();
            addEventListener(Event.ENTER_FRAME, renderHandler);
            stage.addEventListener(MouseEvent.MOUSE_DOWN, downHandler);
            stage.addEventListener(MouseEvent.MOUSE_UP, upHandler);
            stage.addEventListener(Event.MOUSE_LEAVE, upHandler);
            //碰撞监听
            //addContactListener();
            //console = new Console();
            //addChild(console);
            //console.x = stage.stageWidth - console.width;
        }
        
        private function createWorld():void
        {
            var gravity:b2Vec2 = new b2Vec2(0, 9.0);
            var doSpleep:Boolean = true;
			
            world = new b2World(gravity, doSpleep);
            world.SetWarmStarting(true);
        }
        private function createWall():void
        {
            var wallDef:b2BodyDef = new b2BodyDef();
            wallDef.type = b2Body.b2_staticBody;
            //左边墙
            wallDef.position.Set(10 / PIXEL_TO_METER, stage.stageHeight / 2 / PIXEL_TO_METER);
            var wallFixtureDef:b2FixtureDef = new b2FixtureDef();
            var wallShape:b2PolygonShape = new b2PolygonShape();
            wallShape.SetAsBox(10 / PIXEL_TO_METER, stage.stageHeight / 2 / PIXEL_TO_METER);
            wallFixtureDef.shape = wallShape;
            wallFixtureDef.density = 1;
            wallFixtureDef.friction = .3;
            wallFixtureDef.restitution = 0;
            var leftWallBody:b2Body = world.CreateBody(wallDef);
            leftWallBody.CreateFixture(wallFixtureDef); 
            //右边墙
            wallDef.position.Set((stage.stageWidth - 10) / PIXEL_TO_METER, stage.stageHeight / 2 / PIXEL_TO_METER );
            var rightWallBody:b2Body = world.CreateBody(wallDef);
            rightWallBody.CreateFixture(wallFixtureDef); 
            //上边墙
            wallDef.position.Set(stage.stageWidth / 2 / PIXEL_TO_METER, 10 / PIXEL_TO_METER );
            wallShape.SetAsBox(stage.stageWidth / 2 / PIXEL_TO_METER, 10 / PIXEL_TO_METER);
            var topWallBody:b2Body = world.CreateBody(wallDef);
            topWallBody.CreateFixture(wallFixtureDef);
            //下边墙
            wallDef.position.Set(stage.stageWidth / 2 / PIXEL_TO_METER, (stage.stageHeight - 10) / PIXEL_TO_METER);
            var bottomWallBody:b2Body = world.CreateBody(wallDef);
            bottomWallBody.CreateFixture(wallFixtureDef);
        }
        private function createBall():void
        {
            var ballBodyDef:b2BodyDef = new b2BodyDef();
            ballBodyDef.type = b2Body.b2_dynamicBody;
            ballBodyDef.position.Set(stage.stageWidth / 2 / PIXEL_TO_METER, 150 / PIXEL_TO_METER);
            var ballShape:b2CircleShape = new b2CircleShape(20/PIXEL_TO_METER);
            var ballFixtureDef:b2FixtureDef = new b2FixtureDef();
            ballFixtureDef.shape = ballShape;
            ballFixtureDef.density = 1.0;
            ballFixtureDef.friction = .5;
            ballFixtureDef.restitution = 0.9;
            var smallBallbody:b2Body = world.CreateBody(ballBodyDef);
            smallBallbody.CreateFixture(ballFixtureDef);
            
            ballShape.SetRadius(30/PIXEL_TO_METER);
            var bigBallbody:b2Body = world.CreateBody(ballBodyDef);
            bigBallbody.CreateFixture(ballFixtureDef);
            //set userdata
            //smallBallbody.SetUserData(new BallUserData("samllBall"));
            //bigBallbody.SetUserData(new BallUserData("bigBall"));
        }
        private function upDateMousePhy():void
        {
            var _mouseX:Number = stage.mouseX;
            var _mouseY:Number = stage.mouseY;
            //console.showMouseCoords(_mouseX.toString(), _mouseY.toString());
            mouseXphy = _mouseX / PIXEL_TO_METER;
            mouseYphy = _mouseY / PIXEL_TO_METER;
        }
        private function doDrag():void
        {
            if (beMouseDown && !mouseJoint)
            {
                var body:b2Body = getBodyByMouseDown();
                if (body) 
                {
                    var mousePvec:b2Vec2 = new b2Vec2(mouseXphy,mouseYphy);
                    var mouseJoinDef:b2MouseJointDef = new b2MouseJointDef();
                    mouseJoinDef.bodyA = world.GetGroundBody();
                    mouseJoinDef.bodyB = body;
                    
                    mouseJoinDef.target = mousePvec;
                    mouseJoinDef.collideConnected = true;
                    mouseJoinDef.maxForce = 300 * body.GetMass(); //力度
                    mouseJoint = world.CreateJoint(mouseJoinDef) as b2MouseJoint;
                    body.SetAwake(true);//草你吗的使他睡眠 false唤醒..
                }
            }
            if (mouseJoint)
            {
                mouseJoint.SetTarget(new b2Vec2(mouseXphy,mouseYphy));
            }
            if (!beMouseDown)
            {
                if(mouseJoint)
				{
                	//销毁关节
                	world.DestroyJoint(mouseJoint);
					mouseJoint = null;
                }
            }
        }
        private function getBodyByMouseDown():b2Body
        {
            var body:b2Body;
            var aabb:b2AABB = new b2AABB();
            aabb.lowerBound.Set(mouseXphy - 0.001, mouseYphy - 0.001);
            aabb.upperBound.Set(mouseXphy + 0 / 001, mouseYphy + 0.001);
            var fixture:b2Fixture;
            function callbackfunction(fixture:b2Fixture):Boolean
            {
                if (fixture.GetBody().GetType() == b2Body.b2_dynamicBody)
                {
                    body = fixture.GetBody();
                    return false;
                }
                return true;
            }
            world.QueryAABB(callbackfunction,aabb);
            return body;
        }
        
        private function createDebugDraw():void
        {
            var debugSprite:Sprite = new Sprite();
            addChild(debugSprite);
            var debugDraw:b2DebugDraw = new b2DebugDraw();
            debugDraw.SetSprite(debugSprite);
            debugDraw.SetLineThickness(1);
            debugDraw.SetAlpha(1.0);
            debugDraw.SetFillAlpha(0.8);
            debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
            debugDraw.SetDrawScale(PIXEL_TO_METER);
            world.SetDebugDraw(debugDraw);
        }
        /*private function addContactListener():void
        { 
            var contactListener:ContactListener = new ContactListener();
            contactListener.eventdispatcher.addEventListener(CollisionEvent.COLLISION_START, function(e:CollisionEvent):void
            {
                var date:Date = new Date();
                console.addInfo("<"+date.getMinutes()+":"+date.getSeconds()+"> "+e.bodyAName+" 与 "+e.bodyBName +" 相撞");
            });
            contactListener.eventdispatcher.addEventListener(CollisionEvent.COLLISION_END, function(e:CollisionEvent):void
            {
                var date:Date = new Date();
                console.addInfo("<"+date.getMinutes()+":"+date.getSeconds()+"> "+e.bodyAName+" 与 "+e.bodyBName +" 离开");
            });
            world.SetContactListener(contactListener);
        }*/
        private function renderHandler(e:Event):void
        {
            upDateMousePhy();
            doDrag();
            var timeStep:Number = 1 / 30;
            var interation:int = 10;
            world.Step(timeStep, interation, interation);
            world.ClearForces();
            world.DrawDebugData();
        }
        
        private function downHandler(e:MouseEvent):void
        {
            beMouseDown = true;
        }
        private function upHandler(e:Event):void
        {
            beMouseDown = false;
        }
    }
    
}