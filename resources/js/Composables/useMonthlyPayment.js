import { computed, isRef } from "vue";

export const useMonthlyPayment = (total, interestRate, duration) => {
    const monthlyPayment = computed(() => { 
        const principal = isRef(total) ? total.value : total;
        const monthlyInterestRate = isRef(interestRate) ? interestRate.value / 100 / 12 : interestRate / 100 / 12;
        const numberOfPayments = isRef(duration) ? duration.value * 12 : duration * 12;
        return (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    });

    const totalPaid = computed(() => {
        return (isRef(duration) ? duration.value : duration) * 12 * monthlyPayment.value;
    });

    const totalInterestPaid = computed(() => {
        return totalPaid.value - (isRef(total) ? total.value : total);
    });

    return { monthlyPayment, totalPaid, totalInterestPaid };
};

