#pragma strict

public var target : Transform;
public var moveSpeed : float = 3.0;
private var moveDirection : Vector3 = Vector3.zero;
private var directionX : float = 0.0;
private var directionZ : float = 0.0;

function Start () {

}

function Update () {
	var controller : CharacterController = GetComponent(CharacterController);
//Antagonist faces the player
    transform.LookAt(Vector3(target.position.x, transform.position.y, target.position.z));
//Get ditrection to the player
    directionX = target.position.x - transform.position.x;
    directionZ = target.position.z - transform.position.z;
    moveDirection = Vector3(directionX, 0, directionZ);
//Antagonist moves towards player
    controller.Move(moveDirection * moveSpeed * Time.deltaTime);
    //controller : CharacterController = GetComponent(CharacterController);
    if (controller.collisionFlags != CollisionFlags.Below){
     controller.Move(Vector3.down * 9.81 * Time.deltaTime);
    }

}

function Hide () {
//FIND CLOSEST NON-PLAYER OBJECT

//MOVE TO THE SIDE OF THE OBJECT OPPOSITE PLAYER.

}