#!/bin/bash
set -e

# 既存セッションがあればアタッチ方法だけ案内して終了
if tmux has-session -t "president-aboutme" 2>/dev/null && tmux has-session -t "multiagent-aboutme" 2>/dev/null; then
    echo "✅ 既存のセッションが動いています。以下でアタッチしてください:"
    echo "   tmux attach -t president-aboutme"
    echo "   tmux attach -t multiagent-aboutme"
    exit 0
fi

# なければ新規セットアップ
echo "既存セッションが見つからないため、新規にセットアップします..."
./setup.sh

echo ""
echo "🤖 各ペインでClaude Codeを起動しています..."
tmux send-keys -t "president-aboutme" 'claude' C-m
tmux list-panes -t "multiagent-aboutme:agents" -F '#{pane_id}' | while read pane; do
    tmux send-keys -t "$pane" 'claude' C-m
done

echo ""
echo "✅ 起動しました。以下でアタッチしてください:"
echo "   tmux attach -t president-aboutme"
echo "   tmux attach -t multiagent-aboutme"
