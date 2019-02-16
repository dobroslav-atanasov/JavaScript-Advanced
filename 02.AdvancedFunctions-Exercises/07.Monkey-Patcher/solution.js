let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

const solution = function (command) {
    let totalVotes = this.upvotes + this.downvotes;
    let balance = this.upvotes - this.downvotes;

    if (command === 'upvote') {
        this.upvotes++;
    } else if (command === 'downvote') {
        this.downvotes++;
    } else if (command === 'score') {
        let upVotesResult = this.upvotes;
        let downVotesResult = this.downvotes;

        if (totalVotes > 50) {
            let maxVote = Math.max(upVotesResult, downVotesResult);
            let reportedScore = Math.ceil(maxVote * 0.25);
            upVotesResult += reportedScore;
            downVotesResult += reportedScore;
        }

        return [upVotesResult, downVotesResult, balance, getRating.call(this)];

        function getRating() {
            if (totalVotes < 10) {
                return 'new';
            } else if (this.upvotes > (this.upvotes + this.downvotes) * 0.66) {
                return 'hot';
            } else if (balance >= 0 && (this.upvotes > 100 || this.downvotes > 100)) {
                return 'controversial';
            } else if (balance < 0) {
                return 'unpopular';
            } else {
                return 'new';
            }
        }
    }
}

solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score');

for (let i = 0; i < 50; i++) {
    solution.call(post, 'downvote');
}

score = solution.call(post, 'score');     