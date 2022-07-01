export default function Empreducer(state=[],action)
{
switch(action.type)
{
    case 'EmpAction':
    return action.payload;break;
    default:
        return state;

}
}