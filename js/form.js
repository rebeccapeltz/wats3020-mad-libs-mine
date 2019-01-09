function setDefault(val) {
  return val.length === 0 ? "test" : val;
}
function submitHandler() {
  alert("The form was submitted");
  let honorific = setDefault(document.getElementsByName("honorific")[0].value);
  let authorName = setDefault(
    document.getElementsByName("authorName")[0].value
  );
  let adjective1 = setDefault(
    document.getElementsByName("adjective1")[0].value
  );

  let vehicle = setDefault(document.getElementsByName("vehicle")[0].value);

  let vehiclePart = setDefault(
    document.getElementsByName("vehiclePart")[0].value
  );

  let parking = setDefault(document.getElementsByName("parking")[0].value);

  let precious = setDefault(document.getElementsByName("precious")[0].value);

  let noiseMaker = setDefault(
    document.getElementsByName("noiseMaker")[0].value
  );
  let crowdBehavior = setDefault(
    document.getElementsByName("crowdBehavior")[0].value
  );

  let adjective2 = setDefault(
    document.getElementsByName("adjective2")[0].value
  );

  let adjective3 = setDefault(
    document.getElementsByName("adjective3")[0].value
  );
  let color = setDefault(document.getElementsByName("color")[0].value);
  let familyMember = setDefault(
    document.getElementsByName("familyMember")[0].value
  );

  let organ = setDefault(document.getElementsByName("organ")[0].value);

  let bodyPart1 = setDefault(document.getElementsByName("bodyPart1")[0].value);

  let bodyPart2 = setDefault(document.getElementsByName("bodyPart2")[0].value);

  let bodyPart3 = setDefault(document.getElementsByName("bodyPart3")[0].value);
  let thing = setDefault(document.getElementsByName("thing")[0].value);
  let thing2 = setDefault(document.getElementsByName("thing2")[0].value);
  let thing3 = setDefault(document.getElementsByName("bodyPart3")[0].value);

    let adjective4 = setDefault(
    document.getElementsByName("adjective4")[0].value
  );
  let adjective5 = setDefault(
    document.getElementsByName("adjective5")[0].value
  );
  let userNumber = document.getElementsByName("userNumber")[0].value;
  userNumber = parseInt(userNumber.length === 0 ? "2" : userNumber);
  let number2 = userNumber * 2;
  let number3 = userNumber + 1;

  let titleText = `O ${honorific}! My ${honorific}! by <small>${authorName}</small>`;
  let titleHeading = document.querySelector("#madlib-title");
  titleHeading.innerHTML = titleText;

  let storyText = `
    ${userNumber}
    O ${honorific}! my ${honorific}! our ${adjective1} trip is done;
    The ${vehicle} has weather'd every rack, the ${precious} we sought is won;
    The ${parking} is near, the ${noiseMaker} I hear, the people all ${crowdBehavior},
    While follow ${bodyPart1} the steady keel, the vessel ${adjective4} and ${adjective5}:
    But O ${organ}! ${organ}! ${organ}!
    O the bleeding drops of ${color},
    Where on the ${vehiclePart} my ${honorific} lies,
    Fallen ${adjective2} and ${adjective3}.
    ${number2}
    O ${honorific}! my ${honorific}! rise up and hear the ${noiseMaker};
    Rise up-for you the ${thing} is flung-for you the bugle trills;
    For you ${thing2} and ribbon'd ${thing3}-for you the shores a-crowding;
    For you they ${crowdBehavior}, the swaying mass, their eager faces turning;
    Here ${honorific}! dear ${familyMember}!
    This ${bodyPart2} beneath your ${bodyPart3};
    It is some dream that on the ${vehiclePart},
    You've fallen ${adjective2} and ${adjective3}.
    ${number3}
    My ${honorific} does not answer, his lips are pale and still;
    My ${familyMember} does not feel my arm, he has no pulse nor will;
    The ${vehicle} is anchor'd safe and sound, its voyage closed and done;
    From fearful trip, the victor ${vehicle}, comes in with ${precious} won;
    Exult, O shores, and ring, O ${noiseMaker}!
    But I, with mournful tread,
    Walk the ${vehiclePart} my ${honorific} lies,
    Fallen ${adjective2} and ${adjective3}.
`;
  let storyParagraph = document.querySelector("#madlib-text");
  storyParagraph.innerHTML = storyText;

  return false;
}
