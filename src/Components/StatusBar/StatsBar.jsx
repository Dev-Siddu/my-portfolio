import { WORK_HISTORY } from '../../constants'
import { calculateTotalExperience } from '../../utils/dateUtils'
import './StatsBar.css'

const StatsBar = () => {
    const totalExp = calculateTotalExperience(WORK_HISTORY);

    // Dynamic Stats Array
    const DYNAMIC_STATS = [
        {
            icon: 'bi-briefcase-fill',
            text: totalExp,
            className: 'primary-stat' // Ties to Theme color (.NET blue or Hacker green)
        },
        {
            icon: 'bi-trophy-fill',
            text: 'Hackathon Winner',
            className: 'gold-stat'
        },
        {
            icon: 'bi-cpu-fill',
            text: '60% Process Automated',
            className: 'cyan-stat'
        }
    ];

    return (
        <section className="stats-section">
            <div className="container">
                <div className="stats-grid">
                    {DYNAMIC_STATS.map((stat, index) => (
                        <div className={`stat-pill-premium ${stat.className}`} key={index}>
                            <div className="icon-box">
                                <i className={`bi ${stat.icon}`}></i>
                            </div>
                            <span className="stat-text">{stat.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default StatsBar