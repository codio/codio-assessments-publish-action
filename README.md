# Codio assessment publish action

Publishes assessment

* Publishing requires zstd library installed
* Publishing new assessments changes the project, do not forget commit the changes

# Usage

See [action.yml](action.yml)


```yaml
steps:
- name: Install zstd
  run: sudo apt install zstd

- uses: codio/codio-assessment-publish-action
  with:
    token: api-token
    library-id: library-id
    dir: ./

- uses: stefanzweifel/git-auto-commit-action@v4
  with:
    commit_message: Autocommit assessments.json
```

# License

The scripts and documentation in this project are released under the [MIT License](LICENSE)
