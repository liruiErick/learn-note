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
		{trace("接触");
			//排除于墙的碰撞
			/*if (contact.GetFixtureA().GetBody().GetUserData() != null && contact.GetFixtureB().GetBody().GetUserData() != null)
			{
				trace("接触");
			}*/
		}

		override public function EndContact(contact:b2Contact):void
		{trace("离开");
			//排除于墙的碰撞
			/*if (contact.GetFixtureA().GetBody().GetUserData() != null && contact.GetFixtureB().GetBody().GetUserData() != null)
			{
				trace("离开");
			}*/
		}
	}
}