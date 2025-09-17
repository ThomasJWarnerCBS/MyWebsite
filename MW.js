function showExperience(role) {
    const content = {
        sales: "<h4>Sales Experience</h4><ul><li>Managed client accounts and increased sales by 20%.</li><li>Developed sales strategies that improved customer retention.</li></ul>",
        support: "<h4>Support Experience</h4><ul><li>Provided technical support to over 100 clients.</li><li>Resolved customer issues with a 95% satisfaction rate.</li></ul>",
        programming: "<h4>Programming Experience</h4><ul><li>Developed web applications using JavaScript, HTML, and CSS.</li><li>Collaborated on open-source projects and contributed to code reviews.</li></ul>"
    };
    document.getElementById("experience-content").innerHTML = content[role] || "<p>Select a role to see experience details.</p>";
}