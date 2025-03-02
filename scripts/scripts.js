document.addEventListener("DOMContentLoaded", function () {
    // Random color
    document.getElementById("random-btn").addEventListener("click", function () {
        console.log("Button clicked");
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        console.log("Random Color:", randomColor);
        document.body.style.backgroundColor = randomColor;
    });

    // navbar count
    const navCount = document.getElementById("nav-count");
    let navTaskCount = parseInt(navCount.innerText); 

    // task assigned count
    const taskAssignedCountElement = document.querySelector(".flex.items-center.gap-4 .font-bold");
    let taskAssignedCount = parseInt(taskAssignedCountElement.innerText); 
    // activity log section
    const activityLog = document.querySelector(".bg-white.w-96.rounded-lg.p-4"); 
    // clear history btn
    const clearHistoryButton = document.querySelector(".bg-blue-400.w-28"); 

    clearHistoryButton.addEventListener("click", function () {
        // clear all activity
        activityLog.innerHTML = '';
    });

    const completedButtons = document.querySelectorAll(".bg-blue-400");
    completedButtons.forEach(button => {
        button.addEventListener("click", function () {
            // decrease task assigned count
            taskAssignedCount--;
            taskAssignedCountElement.innerText = taskAssignedCount; 
            // increase navbar count
            navTaskCount++;
            navCount.innerText = navTaskCount; 

            // disable btn when clicked
            button.disabled = true;
            button.style.backgroundColor = "#ccc"; 

            // Alert
            alert("Task Completed!"); 

            // update activity log
            const taskName = button.closest('.bg-slate-100').querySelector('h2').innerText; 
            const now = new Date();
            const timeString = now.toLocaleTimeString(); 

            // new activity log entry
            const logEntry = document.createElement('div');
            logEntry.classList.add('bg-blue-100', 'p-2', 'rounded-lg', 'mt-2');

            // add content in the log entry
            logEntry.innerHTML = `<p><strong>Task Completed:</strong> ${taskName} at ${timeString}</p>`;

            // append the log entry to the activity log section
            activityLog.appendChild(logEntry);
        });
    });
});
