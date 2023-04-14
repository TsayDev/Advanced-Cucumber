# Advanced Cucumber

## Loop

I can do a set of steps multiple times.

```
    Then I do the following steps 3 times:
      | I eat an apple  |
      | I eat an orange |
      | I eat a banana  |
```

## Condition

If I am not hungry, the step "I eat the meat" is skipped.

```
    Then I eat the meat if I am hungry
```

## Exception Handling

The statement between `I try to` and `except:` is the try block and the following table is the catch block. For example, 

```
    Then I try to eat the meat except:
      │ I wait for 2 hours │
```

The step `I eat the meat` is called. If there is an exception. The steps in the following table are called. In this case, there is only one step `I wait for 2 hours`. Retry can be added in the step definition.


## Install modules

```
npm i
```

## Run

```
npm test
```
