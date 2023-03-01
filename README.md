# semver-compare-action
A GitHub Action that compares two string semver values

## Inputs

### `first`

**Required** The first value to compare

### `second`

**Required** The second value to compare

### `operator`

**Required** The compartor symbol to use. Only `>`, `=`, `<`, `=<`, `=>` are allowed. Default: `>`

## Outputs

### `result`

The result of the comparison. Can be `true` or `false`.

## Example usage

Add the following step to your workflow:

```yaml
uses: fabriziocacicia/semver-compare-action@v0.1.0
with:
  first: '0.1.0'
  second: '0.2.0'
```

The output of this step is `false` since the default operator is `>`.
