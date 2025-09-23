function showExperience(role) {
    const content = {
        Databases: "<h4>Database Experience</h4><ul><li>Extensive history of database management</li><li> Azure SQL Databases</li><li>Atleast 3rd Form Normaliasation - optionally 4th and 5th. </li></ul>",
        support: "<h4>Support Experience</h4><ul><li>Provided technical support to over 100 clients.</li><li>Resolved customer issues with a 95% satisfaction rate.</li></ul>",
        programming: "<h4>Programming Experience</h4><ul><li>Developed web applications using JavaScript, HTML, and CSS.</li><li>Collaborated on open-source projects and contributed to code reviews.</li></ul>"
    };
    document.getElementById("experience-content").innerHTML = content[role] || "<p>Select a role to see experience details.</p>";
}