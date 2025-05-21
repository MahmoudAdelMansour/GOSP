import { useScholarships } from "./scholarshipService.js";
import './ScholarshipList.css';

export default function ScholarshipList() {
    const { scholarships, isLoading, error } = useScholarships();

    if (isLoading) return (
        <div className="loading-container">
            <div className="spinner"></div>
            <p>Loading scholarships...</p>
        </div>
    );

    if (error) return (
        <div className="error-container">
            <div className="error-icon">⚠️</div>
            <h3>Error loading scholarships</h3>
            <p>{error}</p>
            <button onClick={() => window.location.reload()}>Try Again</button>
        </div>
    );

    return (
        <div className="scholarship-container">
            <h1 className="page-title">Available Scholarships</h1>
            <div className="scholarship-grid">
                {scholarships.map(scholarship => (
                    <div key={scholarship.id} className="scholarship-card">
                        <div className="card-header">
                            <img
                                src={scholarship.avatar}
                                alt={scholarship.name}
                                className="scholarship-avatar"
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/150';
                                }}
                            />
                            <h2 className="scholarship-name">{scholarship.name}</h2>
                        </div>
                        <div className="card-body">
                            <p className="scholarship-description">{scholarship.description}</p>
                            <div className="scholarship-meta">
                                <span className={`status-badge ${scholarship.is_active ? 'active' : 'inactive'}`}>
                                    {scholarship.is_active ? 'Active' : 'Closed'}
                                </span>
                                <span className="applicants-count">
                                    {scholarship.applicants} applicants
                                </span>
                            </div>
                        </div>
                        <div className="card-footer">
                            <span className="date">
                                Updated: {new Date(scholarship.updated_at).toLocaleDateString()}
                            </span>
                            <button className="apply-button">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

/*
 Why we are using this structure instead of a single file?
 ---
 create a single details page for each scholarship,product, etc..
 build your api with mookApi
 build search by name
 build search by another term ,
 */
/*
* */


/*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
   1. Separation of Concerns: Each file has a specific responsibility, making it easier to manage and understand the code.
    2. Reusability: Components and services can be reused across different parts of the application.
    3. Scalability: As the application grows, this structure allows for easier scaling and maintenance.
    4. Testing: Smaller files are easier to test individually.
    5. Collaboration: Multiple developers can work on different files simultaneously without causing merge conflicts.
* */