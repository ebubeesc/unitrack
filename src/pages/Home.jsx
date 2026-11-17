function Home() {
    return (
    <div className="home">
    <section className="hero">
    <div className="hero-content">
    <span className="tag">STUDENT LIFE, SIMPLIFIED</span>
    <h1>Take Control of Your Academic Journey.</h1>
    <p>
    Manage your attendance, assignments and class
    timetable all in one place with UniTrack.
    </p>
    <a href="/services" className="hero-btn">Explore Features →</a>
    </div>
    
    <div className="hero-card">
    <div className="hero-icon">🎓</div>
    <h3>Your Academic Life</h3>
    <p>Organized. Focused. Successful.</p>
    <div className="progress">
    <div></div>
    </div>
    <small>Stay on track with your goals</small>
    </div>
    </section>
    
    <section className="stats">
    <div className="stat-card">
    <span>📅</span>
    <h3>Attendance</h3>
    <p>Keep track of your classes</p>
    </div>
    <div className="stat-card">
    <span>📝</span>
    <h3>Assignments</h3>
    <p>Never miss a deadline</p>
    </div>
    <div className="stat-card">
    <span>⏰</span>
    <h3>Timetable</h3>
    <p>Plan your weekly schedule</p>
    </div>
    <div className="stat-card">
    <span>📈</span>
    <h3>Progress</h3>
    <p>Follow your academic growth</p>
    </div>
    </section>
    
    <section className="welcome">
    <h2>Everything you need to stay organized.</h2>
    <p>
    UniTrack gives students a simpler way to manage
    important academic activities and stay focused
    throughout the semester.
    </p>
    </section>
    </div>
    );
    }
    
    export default Home;
    
    