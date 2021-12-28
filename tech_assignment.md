## Technical Review Assignment

Thank you for taking the time to participate in this task. Please read carefully all the instructions below and don’t hesitate to contact us in case of any doubt. You should use TypeScript as programming language, since this is the language we use in this company.
You should NOT find this exercise to be particularly difficult. It is designed to be a straightforward coding exercise, and it should take you no more than 90 minutes.

#### Things we are very picky about:

- Simplicity – We value simplicity as an architectural virtue and a development practice. Solutions should reflect the difficulty of the assigned task, and should NOT be overly complex, but at the same time we value good usage of patterns, SRP and segregation, so feel free to show something elegant!
- Self-explanatory code – the solution must speak for itself. Multiple paragraphs explaining the solution are a sign that isn’t straightforward enough to understand purely by reading the code.
- Test Coverage – is not mandatory, but automatic testing is always good. The solution could be developed using TDD (test-first) and with excellent unit test coverage. This is a very valuable plus for us!
- Should be easy to run the program and tests from the command line. If you need supporting scripts, feel free to add them to your submission.

## Instructions

### Step 1

Please keep the code for this step in a separate folder called: Step1

Write a program that produces the following for any contiguous range of numbers:

- the number

- `tip` for numbers that are multiples of 3

- `tap` for numbers that are multiples of 5

- `tiptap` for numbers that are multiples of 15

e.g.: if I run the program I should get the following result:

```

$ tiptap 2 16

2 tip 4 tap tip 7 8 tip tap 11 tip 13 14 tiptap 16

```

```

$ tiptap -3 -1

tip -2 -1

```

### Step 2

Please keep the code for this step in a separate folder called Step 2. Copy the code from Step 1 and change it, do not extend or import it from the Step 1 folder.

Change the code in this new folder to perform the following:

- If the number contains a 3 you must output the text `gold`

- This overrides any existing behaviour

e.g.: If I run the program I should get the following output:

```

$ tiptap 2 14

2 gold 4 tap tip 7 8 tip tap 11 tip gold 14

```

### Step 3

Please keep the code for this step in a separate folder called Step 3. Copy the code from Step 2 and change it, do not extend or import it from the Step 2 folder.

Finally, change the code in this new folder to perform the following:

- Produce a report at the end of the program showing how many times the following were output

  - tip

  - tap

  - tiptap

  - gold

  - an integer

e.g.: if I run the program I should get the following output:

```

$ tiptap 1 20

1 2 gold 4 tap tip 7 8 tip tap 11 tip gold 14 tiptap 16 17 tip 19 tap

tip: 4

tap: 3

tiptap: 1

gold: 2

integer: 10     # integer is 10 because there were 10 numbers that were not altered in any way

```

### Code submission

Please submit your code in a zip file or by sharing a repository from your favourite git provider (GitHub, GitLab, BitBucket). Send the file back to the same email you received this assignment from.

Please write code that you would be satisfied to deploy in a production environment.

Please provide an automated build file that compiles your code and runs the tests, that should be independent for each step. Submissions without an automated build will not be accepted.

### Anonymous submission

We practice a blind review process for exercise submissions, so please don’t include any personal details that might identify you (not even your name!) anywhere in your submitted source code, documentation, or comments. This makes our interview process as fair and systematic as possible.

The person who reviews your submission won’t have access to your CV or know anything about you. Your identification in the email communications with our recruitment team won’t be shared with the reviewer.

**Good Luck!**
