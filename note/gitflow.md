All -
1. Make sure you are in the feature branch which contains work you want to provide to Upstream's Github repo.
 Don't work on main branch! When you want to start work, create a feature branch for that feature.
- git branch <feature_branch>
- git switch <feature_branch>
 if git switch doesn't work, use checkout
- git checkout <feature_branch>
This can then be brought back into main ONCE IT IS READY FOR PRODUCTION.
2. Add & Commit your work (MUST be done BEFORE fetch & rebase)
- git add -A
- git commit -m 'message'
3. To download commits to local machine:
- git fetch upstream
4. To rebase commits to your feature branch:
- git rebase upstream/main
5. Run push to branch, where feature_branch is the name of your branch.
- git push origin <feature_branch>
6. Make pull request from your branch to my (Upstream) main and let me know