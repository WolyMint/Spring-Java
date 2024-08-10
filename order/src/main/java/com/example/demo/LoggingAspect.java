package com.example.demo;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class LoggingAspect {
    @Before("execution(* com.example.service.OrderService.*(..))")
    public void logBeforeMethodExecution(JoinPoint joinPoint){
        System.out.println("Method" + joinPoint.getSignature().getName() + "is about to be called");
    }
    @AfterReturning(pointcut = "execution(* com.example.service.OrderService.*(..))", returning = "result")
    public void logAfterMethodExecution(JoinPoint joinPoint, Object result){
        System.out.println("Method" + joinPoint.getSignature().getName()+ "has returned with value" + result);
    }
}
