#pragma strict

public var target : Transform;
public var npcHides : boolean = false;
public var npcChangesSpeed : boolean = false;
private var agent : NavMeshAgent;
private var isHiding : boolean = false;
private var count = 1;
private var DistanceText : string;

function Start () {
	agent = GetComponent.<NavMeshAgent>();
}

function Update () {

//Determine if NPC needs to hide (check charHides var)
	//determine if player is looking at NPC
	//set isHiging to true
	//determine closest hide spot
	
//Change NPC Speed for specific conditions
	//while (count < 60) {
		//agent.speed = count * 0.1;
		//agent.SetDestination(target.position);
		//count++;
	//}
	DistanceText.text = Vector3.Distance(target.position, transform.position);
	agent.SetDestination(target.position);
}