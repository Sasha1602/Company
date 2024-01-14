import {team} from "../db";
import "../style/team.css"
export const Team = () => {
    return (
        <div className='team'>
            <p className='grid-title'>{team[0].title}</p>
            <div className='grid'>
                {[...Array(7)].map((_, index ) => (
                    <div className={`member${index}`} key={index + 1}>
                        <img src={team[index + 1].image} alt={`Member № ${index+ 1}`}/>
                        <div className='member-role'>{team[index + 1].name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}