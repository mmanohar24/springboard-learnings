// Declare the task array and monitoring task ID
const oneTimeTasks = [];
let monitoringTaskId = null;

// Function to add a one-time task
function addOneTimeTask( func, delay)
{
    oneTimeTasks.push( {func, delay } )
}

// Function to run all one-time tasks
function runOneTimeTasks()
{
    for( const task of oneTimeTasks)
    {
        setTimeout( task.func, task.delay);
    }
}

// Function to start monitoring
function startMonitoring()
{
    if(monitoringTaskId === null)
    {
        monitoringTaskId = setInterval( () => {
            console.log("Monitoring ...")
        }, 6000 );
    }
}

// Function to stop monitoring
function stopMonitoring()
{
    if(monitoringTaskId !== null)
    {
        clearInterval(monitoringTaskId);
        monitoringTaskId = null;
    }
}

// Function to start countdown
function startCountDown(duration)
{
    let remainingTime = duration;

    const countdownId = setInterval( () => {
        if(remainingTime > 0)
        {
            console.log(`Time remaining: ${remainingTime} seconds`);
            remainingTime--;
        }
        else
        {
            console.log("Liftoff! 🚀");
            clearInterval(countdownId);
        }
    }, 3000 )
}


// Function to schedule launch tasks
function scheduleLaunch()
{
    addOneTimeTask( () => console.log("Starting pre-launch checks..."), 1000);
    addOneTimeTask( () => console.log(" Check Power Systems "), 2000 );
    addOneTimeTask( () => console.log(" Check Navigation Systems "), 3000 );
    addOneTimeTask( () => console.log(" All systems go! "), 4000 );
}

// Main function to execute launch sequence
function executeLaunch()
{
    scheduleLaunch();
    startMonitoring();
    runOneTimeTasks();

    setTimeout( () => {
        stopMonitoring();
        startCountDown(5);
    }, 5000 );
}