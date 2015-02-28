#pragma strict

 var target : Transform;
 var moveSpeed = 3; 
 var rotationSpeed = 3; 
 var controller : CharacterController; 
 var speed : float = 10;
 
// var gravity = 20.0;
//var verticalSpeed= 0.0;
//private var collisionFlags : CollisionFlags;
 
 var myTransform : Transform; 
 
 function Awake ()
 {
   myTransform = transform; 
 }
 
 function Start () 
 {
   target = GameObject.FindWithTag("Player").transform;  
   controller = gameObject.GetComponent(CharacterController); 
 }
 
 function Update() 
 {
   myTransform.rotation = Quaternion.Slerp(myTransform.rotation, Quaternion.LookRotation(target.position - myTransform.position), 
                                                                                                    rotationSpeed*Time.deltaTime);
   
   myTransform.position += myTransform.forward * moveSpeed * Time.deltaTime; 
   
   transform.LookAt(target); 
   controller.SimpleMove(speed*transform.forward);
   rigidbody.velocity = Vector3( 0, rigidbody.velocity.y, 0);
 }
 
// function ApplyGravity ()
//{
//        if (IsGrounded ())
//            verticalSpeed = 0.0;
//        else
//            verticalSpeed -= gravity * Time.deltaTime;
//}
 
 
 //function IsGrounded () {
 //   return (collisionFlags  CollisionFlags.CollidedBelow) != 0;
//}
 