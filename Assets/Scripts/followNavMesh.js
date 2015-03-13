#pragma strict

public var target : Transform;
public var npcHides : boolean = false;
public var npcChangesSpeed : boolean = false;
private var agent : NavMeshAgent;
private var isHiding : boolean = false;
private var count = 1;
//var animation: Animation;
//private var DistanceText: string;

function Start () {
//    animation = GetComponent.<Animation>();
	agent = GetComponent.<NavMeshAgent>();
}

function Update () {

//Determine if NPC needs to hide (check charHides var)
	//determine if player is looking at NPC
	//set isHiging to true
	//determine closest hide spot
	//Move to Hide spot
	//Leave hide spot when reson for hiding ends
	
//Change NPC Speed for specific conditions
	//Change Speed based on distance to Player
	//while (count < 60) {
		//agent.speed = count * 0.1;
		//agent.SetDestination(target.position);
		//count++;
	//}
//	DistanceText.text = Vector3.Distance(target.position, transform.position);
//	animation["Walk"].enabled = true;
//	animation["Walk"].weight = 1.0;
	agent.SetDestination(target.position);
}