package hac.repo;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * This interface is responsible for the communication with the database.
 */
public interface PurchaseRepository extends JpaRepository<Purchase, Long> {
}
