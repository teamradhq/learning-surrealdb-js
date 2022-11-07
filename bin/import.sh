#!/usr/bin/env bash

source ./.env

function insert {
  local query="${*}"

  curl --request POST \
      --header "Accept: application/json" \
      --header "NS: test" \
      --header "DB: test" \
      --user "root:root" \
      --data "${query}" \
      http://localhost:8101/sql
}

insert "DELETE test"
insert "CREATE test:foo SET name='Foo'"
insert "CREATE test:bar SET name='Bar'"
insert "CREATE test:baz SET name='Baz'"

