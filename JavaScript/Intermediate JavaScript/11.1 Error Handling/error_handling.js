function mysteryOperation()
{
    const num = Math.random();

    if ( num < 1)
    {
        console.log('The operation is sucessful');
    }
    else
    {
        console.log('The operation failed')
    }
}

const totalOperations = 20;
const vacationDaysOnSuccess = 13;
const vacationDayOnFailure = 1;
const attendance = 3;

const vacationDaysEarned = 0;

for (let i = 0; i < totalOperations; i++)
{
    try
    {
        mysteryOperation();
        vacationDaysEarned += vacationDaysOnSuccess;
    }
    catch (error)
    {
        vacationDaysEarned += vacationDayOnFailure;
        // console.log(error);
        // console.log(error.name)
        // console.log(error.message)
        // console.log(error.stack)
    }
    finally
    {
        vacationDaysEarned += attendance;
    }
}
console.log(`Total vacation days earned: ${vacationDaysEarned}`);