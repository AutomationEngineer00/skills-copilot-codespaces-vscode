function skillsMember(){
    return{
        restrict: 'E',
        templateURL:  'modules/skills/views/member.html',
        controller: 'SkillsMemberContoller',
        controllerAs: 'vm',
        bindToController: 'yes',
        scope: {
            member: 'm'
        }
    };
}