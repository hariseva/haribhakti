export default function Userreducer(state=[],action)
{
switch(action.type){
    case 'UsersAction':
    return action.payload;break;
    default:return state

}
}