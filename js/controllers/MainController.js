

app.controller('MainController', ['$scope', function($scope) {
    //resume (download file)
    $scope.resume = {
        path: './resume/',                                  //works (for all!)
        // path: 'http://50.66.186.244/resume/',            //only works (on external IP address)
        // path2: 'http://localhost:777/resume/',           //only works (on localhost)
        piping: 'DEAN_JONES_Resume_(piping_designer).pdf',
        software: 'DEAN_JONES_Resume_(software_developer).pdf',
    }
    
    $scope.about = "I am a drafter with over 15 years of experience doing mechanical piping design and CAD support. " +
    "I have recently updated my skills and proficiency in software development. " + 
    "I am openly looking for an opportunity in either drafting and/or programming that would benefit from my comprehensive skills and experience.";
    $scope.pip_skills_bool = false;
    $scope.soft_skills_bool = false;
    $scope.skills_toggle = function(id, skills, state1, state2){
        let x = document.getElementById(id);
        $scope.menu_toggle(skills);
        // $scope.menu_toggle("pip_skills");
        // toggle button
        return {
            toggle: $scope.pip_skills_bool ? x.classList.replace(state1, state2) : x.classList.replace(state2, state1),
            bool: $scope.pip_skills_bool = !$scope.pip_skills_bool,
        }
        
        //x.classList.contains('fa-toggle-on') ? x.classList.replace('fa-toggle-on', 'fa-toggle-off') : x.classList.replace('fa-toggle-off', 'fa-toggle-on');
        //skills_toggle('tog_pip_skills', pip_skills_bool, 'fa-toggle-on', 'fa-toggle-off')
    }
    $scope.menu_toggle = function(id){
        let x = document.getElementById(id);
        return x.classList.contains('w3-hide') ? x.classList.replace('w3-hide', 'w3-show') : x.classList.replace('w3-show', 'w3-hide');
    }
    //PIPING SKILLS
    $scope.piping = [
        {
            skill: 'AutoCAD',
            description: 'I have over 20 years of experience using AutoCAD.',
            experience: 'Expert',
            level: 100,
        },
        {
            skill: 'CADworx',
            description: 'I have designed and supported CADworx when it was first introduced.',
            experience: 'Expert',
            level: 100,
        },
        {
            skill: 'Navisworks',
            description: 'I have used, supported and created applications with Navisworks',
            experience: 'Advanced',
            level: 75,
        },
        {
            skill: 'ISOGEN',
            description: 'I have used ISOGEN with AutoPlant and CADworx.',
            experience: 'Advanced',
            level: 75,
        }
    ];
    //PIPING SKILLS
    $scope.software = [
        {
            skill: 'Web Development',
            description: 'I have created a few websites with responsive design!',
            experience: 'Intermediate',
            level: 50,
        },
        {
            skill: 'Python',
            description: 'Python is one of my favorite languages!',
            experience: 'Advanced',
            level: 75,
        },
        {
            skill: 'JavaScript',
            description: 'I have taken a couple courses using JavaScript, JQuery and AJAX at SAIT.',
            experience: 'Intermediate',
            level: 50,
        },
        {
            skill: 'C#',
            description: 'This was the first OOP language I really enjoyed using in Visual Studio.',
            experience: 'Intermediate',
            level: 50,
        }
    ];
  // FUNCTION: test
  $scope.func1 = function(){
    //$scope.exercises[index].count += 1;
    alert($scope.piping[1].skill);
  }
}]);
