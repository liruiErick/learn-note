package 
{
	import Box2D.Dynamics.b2ContactListener;
	import Box2D.Dynamics.Contacts.b2Contact;
	import flash.events.Event;
	import flash.events.EventDispatcher;

	public class ContactListener extends b2ContactListener
	{
		public var eventdispatcher:EventDispatcher;
		public function ContactListener()
		{
			eventdispatcher = new EventDispatcher  ;
		}

		override public function BeginContact(contact:b2Contact):void
		{
			//排除于墙的碰撞
			if (contact.GetFixtureA().GetBody().GetUserData() != null && contact.GetFixtureB().GetBody().GetUserData() != null)
			{
				var collisionEvent:CollisionEvent = new CollisionEvent(CollisionEvent.COLLISION_START);
				collisionEvent.bodyAName = contact.GetFixtureA().GetBody().GetUserData() as BallUserData.name;
				collisionEvent.bodyBName = contact.GetFixtureB().GetBody().GetUserData() as BallUserData.name;
				eventdispatcher.dispatchEvent(collisionEvent);
			}
		}

		override public function EndContact(contact:b2Contact):void
		{
			//排除于墙的碰撞
			if (contact.GetFixtureA().GetBody().GetUserData() != null && contact.GetFixtureB().GetBody().GetUserData() != null)
			{
				var collisionEvent:CollisionEvent = new CollisionEvent(CollisionEvent.COLLISION_END);
				collisionEvent.bodyAName = contact.GetFixtureA().GetBody().GetUserData() as BallUserData.name;
				collisionEvent.bodyBName = contact.GetFixtureB().GetBody().GetUserData() as BallUserData.name;
				eventdispatcher.dispatchEvent(collisionEvent);
			}
		}
	}
}