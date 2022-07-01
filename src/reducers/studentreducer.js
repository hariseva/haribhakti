export default function Studentreducer(state=[],action)
{
switch(action.type){
    case 'StudentsAction':
    return action.payload;
    default:return state

}
}