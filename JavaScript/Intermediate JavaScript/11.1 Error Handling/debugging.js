const accounts = [
	{id: 1, owner: "Alice", balance: 500},
	{id: 2, owner: "Bob", balance: 300}
];

function getAccountById (id)
{
	for (const account of accounts)
	{
        // Changes: Using strict equality operator to compare the id values
		if (account.id === id)
		{
			return account;
		}

        // Throw an error if the account ID does not exist
        if(account.id !== id)
        {
            throw new Error('Account not found.')
        }

        // Validate id
        if (!Number.isFinite(account.id) || account.id <= 0)
        {
            throw new Error('Invalid account ID: The ID must be a greater than zero or positive integer.');
        }
	}
}

function createAccount (newAccountId, newAccountOwner)
{
    const account = getAccountById(newAccountId);
    // Check if the account ID already exists
    if (account)
    {
        throw new Error('Account already exists.')
    }

    // Validate newAccountId
    if(!Number.isFinite(newAccountId) || newAccountId <= 0)
    {
        throw new Error('Invalid account ID: The ID must be a greater than zero or positive integer.');
    }

    // Validate newAccountOwner
    if(typeof newAccountOwner !== 'string' || newAccountOwner.trim() === '')
    {
        throw new Error('Invalid account owner: The owner name must be provided and not empty.')
    }

	accounts.push(
		{
			id: newAccountId,
			owner: newAccountOwner,
			balance: "0"
		}
	);
}

function depositMoney (accountId, amount)
{
	const account = getAccountById(accountId);

    // Validate account
	if (!account)
	{
		throw new Error("Account not found");
	}

    // Validate amount
    if(!Number.isFinite(amount) || amount <= 0 || typeof amount !== 'number')
    {
        throw new Error('Invalid value for deposit amount: The amount must be a number and should be greater than zero to make a deposit.')
    }

	account.balance += amount;
}

function withdrawMoney (accountId, amount)
{
	const account = getAccountById(accountId);

    // Validate account
	if (!account)
	{
		throw new Error("Account not found.");
	}

    // Validate amount
	if (!Number.isFinite(amount) || amount <= 0)
	{
		throw new Error("Invalid value for withdrawal amount: The amount must be a finite number.");
	}

    // Check for sufficient balance
    if(account.balance < amount)
    {
        throw new Error('Insufficient balance: Cannot withdraw money.')
    }

	account.balance -= amount;
}

function transferMoney (fromAccountId, toAccountId, amount)
{
	const fromAccount = getAccountById(fromAccountId);
	const toAccount = getAccountById(toAccountId);

    // Validate fromAccount
	if (!fromAccount)
	{
		throw new Error("Source account not found.");
	}

    // Validate toAccount
    if(!toAccount)
    {
        throw new Error('Destination account not found.')
    }

    // Validate Transfer amount
	if (!Number.isFinite(amount) || amount < 0)
	{
		throw new Error("Invalid value for transfer amount: The amount must be a positive finite number.");
	}

    // Check for sufficient balance in fromAccount
    if(fromAccount.balance < amount)
    {
        throw new Error('Insufficient balance: Cannot transfer money.')
    }

    // Update balances
    // Changes: Using -= and += operators to update balances
    fromAccount.balance -= amount;
	toAccount.balance += amount;
}

/*
Hints:

getAccountById("1");

createAccount(1, "Alice");
createAccount("3", "Charlie");
createAccount(-3, "Charlie");
createAccount(3, ["Charlie"]);
createAccount(3, "");
createAccount(3, "  ");

depositMoney(1, "300")
depositMoney(1, -300)
depositMoney(1, 0)
depositMoney(1, Infinity)
depositMoney(4, 100)

withdrawMoney(1, -100)
withdrawMoney(1, 0)
withdrawMoney(1, 501)

transferMoney(1, 4, 100)
transferMoney(1, 2, 501);
transferMoney(1, 2, 100);
*/
