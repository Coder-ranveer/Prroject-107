function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true });
    classifier = ml5.soundClassifier('hhttps://teachablemachine.withgoogle.com/models/V4v_ltq9j/model.json', modelready);
}

function modelready()
{
    classifier.classify(gotresult);
}

