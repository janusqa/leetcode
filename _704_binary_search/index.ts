function search(nums: number[], target: number): number {
    let lo = 0;
    let hi = nums.length;

    while (lo < hi) {
        const m = Math.floor(lo + (hi - lo) / 2);

        if (target === nums[m]) {
            return m;
        } else if (target > nums[m]) {
            lo = m + 1;
        } else {
            hi = m;
        }
    }
    return -1;
}
