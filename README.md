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

## Install modules

```
npm i
```

## Run

```
npm test
```
