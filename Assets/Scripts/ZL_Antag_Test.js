#pragma strict

public var target : Transform;
public var moveSpeed = 3;


function Start () {

}

function Update () {
	var controller : CharacterController = GetComponent(CharacterController);
//Antagonist faces the player
    transform.LookAt(Vector3(target.position.x, transform.position.y, target.position.z));
//Antagonist moves towards player
    //transform.Translate(Vector3.forward * moveSpeed * Time.deltaTime);
    controller.Move(Vector3.forward * moveSpeed * Time.deltaTime);
    //controller : CharacterController = GetComponent(CharacterController);
    if (controller.collisionFlags != CollisionFlags.Below){
     controller.Move(Vector3.down * -9.81 * Time.deltaTime);
    }

}