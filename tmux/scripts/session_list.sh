#!/bin/bash
# 获取当前 session 名称
current=$(tmux display-message -p '#{session_name}')

# 列出所有 session, 当前 session 用蓝色加粗高亮（与激活 tab 一致）
tmux list-sessions -F '#{session_name}' | while read -r s; do
  if [ "$s" = "$current" ]; then
    echo "#[fg=#61afef,bold]$s#[default]"
  else
    echo " $s"
  fi
done | tr '\n' ' '
